//const articleSelector = " div > div > div.crayons-story__indention > h3";
import { useState } from "react";

export function useBlogs() {
  const [blogs] = useState([
    {
      title: `🧐 Demystifying Big 🅾️`,
      uri: "https://dev.to/jasonnordheim/demystifying-big-1djf",
      img:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V4T3dkzD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/etb6zp1laicxy0m2673o.jpg",
      teaser:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      title: `Let's get Sassy 💅`,
      uri: "https://dev.to/jasonnordheim/let-s-get-sassy-4onp",
      teaser:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      title: `GraphQL vs. REST`,
      uri: "https://dev.to/jasonnordheim/graphql-vs-rest-4mkl",
      img:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--HkMa2At1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/0w4vlfc8rpztq0d1y2rv.png",
      teaser:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      title: `Debounce, Performance and React`,
      uri: "https://dev.to/jasonnordheim/debounce-performance-and-react-4de1",
      img:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--R1veFWbn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1xdkl0q53884jh7pr0v1.jpg",
      teaser:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      title: `How JavaScript came to dominate web development`,
      uri:
        "https://dev.to/jasonnordheim/how-javascript-came-to-dominate-web-development-3nom",
      img:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V2yMvobl--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/z3obe3geq76fgk13tnhw.jpeg",
      teaser:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
  ]);
  return blogs;
}

export default useBlogs;

//   const [blogs, setBlogs] = useState({});

//   useEffect(() => {
//     axios
//       .get("https://dev.to/jasonnordheim")
//       .then((res) => {
//         const docString = cheerio.html(res.data);
//         console.log(typeof docString);
//       })
//       .catch((reason) => console.error(reason));
//   }, []);
