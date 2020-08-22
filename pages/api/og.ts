import { NextApiRequest, NextApiResponse } from "next";
import iconv from "iconv-lite";
import og from "open-graph-scraper";
import axios from "axios";

const crawl = async (link) => {
  try {
    axios.interceptors.response.use((response) => {
      let ctype = response.headers["content-type"];
      if (ctype.includes("EUC-KR")) {
        response.data = iconv.decode(response.data, "EUC-KR");
      }
      return response;
    });

    const { data: html } = await axios(link, {
      responseType: "arraybuffer",
      headers: {
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
      },
    });
    return html;
  } catch (err) {
    const { data: html } = await axios(link, {
      responseType: "arraybuffer",
      headers: {
        "user-agent": "Googlebot/2.1 (+http://www.googlebot.com/bot.html)",
      },
    });
    return html;
  }
};

const crawlOpenGraph = async (link: string) => {
  let html: string;
  try {
    html = await crawl(link);
  } catch (err) {
    throw new Error(`Cannot crawl provided link, ${link}`);
  }

  try {
    const { error, result } = await og({ html });

    if (error) {
      throw Error;
    }

    return result;
  } catch (err) {
    throw new Error(`Cannot parse open-graph of provided link. ${link}`);
  }
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.body;
  return crawlOpenGraph(url)
    .then((data) => {
      // if (error) throw new Error();
      // console.log(result);
      const result: IOpenGraph = {
        title: data.ogTitle,
        description: data.ogDescription,
        url,
        image: data.ogImage?.url,
      };
      res.json(result);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(404).end();
    });
};
