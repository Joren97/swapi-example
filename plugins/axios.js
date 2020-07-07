import https from "https";

const agent = new https.Agent({
  rejectUnauthorized: false
});

export default function({ $axios, app, store }) {
  $axios.onRequest(config => {});

  $axios.onResponse(response => {
    console.log("Got response");
  });

  $axios.onError(response => {
    console.log(response);

    // throw new Error(message);
  });
}
