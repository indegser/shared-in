import { NextApiRequest, NextApiResponse } from "next";
import crawler from "open-graph-scraper";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.body;
  return crawler({ url })
    .then(({ error, result }) => {
      if (error) throw new Error();
      const data: IOpenGraph = {
        title: result.ogTitle,
        description: result.ogDescription,
        url,
        image: result.ogImage?.url,
      };
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
};
