import axios from "axios";

export const getScrapData = async () => {
  try {
    const res = await axios.get("https://time.com");
    const ul = res.data.split('<ul class="swipe-h">');
    const list = ul[1].split("</ul>")[0];
    let listArray = list.split("</li>");
    listArray.splice(5, 1);
    console.log("List array =>", listArray.length, listArray);
    let data = [];
    listArray.forEach((item, i) => {
      let url = "https://time.com" + item.split("href=")[1].split(">")[0];
      let imgeUrl = item.split('src="')[1].split('"')[0];
      let content = item
        .split('<h2 class="title">')[1]
        .split("/>")[1]
        .split("</a>")[0];
      console.log("content =>", content, i);
      data.push({
        url,
        imgeUrl,
        content,
      });
    });

    return data;
  } catch (error) {
    console.log("Error in the getScrapData =>", error);
  }
};
