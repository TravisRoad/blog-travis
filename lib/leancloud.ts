import AV from "leancloud-storage";

var appId = process.env.APPID;
if (appId === undefined) appId = "";

var appKey = process.env.APPKEY;
if (appKey === undefined) appKey = "";

var serverURL = process.env.SERVERURL;
if (serverURL === undefined) serverURL = "";

AV.init({
  appId,
  appKey,
  serverURL,
});

// user value, preview value
export function like(slug: string, like: boolean = true) {
  const query = new AV.Query("like");
  query.equalTo("slug", slug);
  query.select(["slug", "val"]);

  query.first().then((item) => {
    if (item === undefined) {
      const Like = AV.Object.extend("like");
      const like = new Like();
      like.set("slug", slug);
      like.set("val", like ? 1 : 0);
    } else {
      const val = item.get("val");
      let newVal = val + (like ? 1 : -1);
      if (newVal < 0) newVal = 0;

      item.set("val", newVal);
      item.save();
    }
  });
}

export function setLikeNum(slug: string, val: number) {
  const Like = AV.Object.extend("like");
  const like = new Like();
  like.set("slug", slug);
  like.set("val", val);
  like.save();
}

export async function getLikeNum(slug: string): Promise<number> {
  const query = new AV.Query("like");
  query.equalTo("slug", slug);
  query.select(["slug", "val"]);

  let val = -1;

  await query.first().then((item) => {
    if (item !== undefined) {
      val = item.get("val");
    } else {
      throw Error("There is no Object");
    }
  });

  return val;
}

export function unique_view(slug: string) {
  const query = new AV.Query("view");
  query.equalTo("slug", slug);

  query.first().then((item) => {
    if (item === undefined) {
      const View = AV.Object.extend("view");
      const view = new View();
      view.set("slug", slug);
      view.set("uv", 1);
    } else {
      const uv = item.get("uv");
      item.set("uv", uv + 1);
      item.save();
    }
  });
}

export async function getViewCount(slug: string): Promise<number> {
  const query = new AV.Query("view");
  query.equalTo("slug", slug);

  let val = -1;

  await query.first().then((item) => {
    if (item !== undefined) {
      val = item.get("uv");
    } else {
      throw Error("There is no Object");
    }
  });

  return val;
}

export function setViewNum(slug: string, uv: number) {
  const View = AV.Object.extend("view");
  const view = new View();
  view.set("slug", slug);
  view.set("uv", uv);
  view.save();
}

export function vv(slug: string) {
  const query = new AV.Query("view");
  query.equalTo("slug", slug);

  query.first().then((item) => {
    if (item === undefined) {
      const View = AV.Object.extend("view");
      const view = new View();
      view.set("slug", slug);
      view.set("vv", 1);
    } else {
      const vv = item.get("vv");
      item.set("vv", vv + 1);
      item.save();
    }
  });
}

export async function getVVCount(slug: string): Promise<number> {
  const query = new AV.Query("view");
  query.equalTo("slug", slug);

  let val = -1;

  await query.first().then((item) => {
    if (item !== undefined) {
      val = item.get("vv");
    } else {
      throw Error("There is no Object");
    }
  });

  return val;
}

export function setVVNum(slug: string, vv: number) {
  const View = AV.Object.extend("view");
  const view = new View();
  view.set("slug", slug);
  view.set("vv", vv);
  view.save();
}
