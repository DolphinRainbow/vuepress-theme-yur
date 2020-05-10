import Mixin from "@theme/utils/mixin";
import Translation from "@theme/plugins/Translation";
import Blog from "@theme/plugins/Blog";
import Ant from "@theme/plugins/Ant";
import "@theme/styles/index.less";

export default ({ Vue, options, router, siteData }) => {
  Vue.use(Mixin);
  Vue.use(Translation);
  Vue.use(Blog);
  Vue.use(Ant);
};

if (process.env.NODE_ENV === "production" && typeof window !== "undefined") {
  console.log(
    "\n%c(づ￣ ³￣)づヾ Author：cnguu%c VuePress Theme - Yur \n",
    "color: #fadfa3; background: #030307; padding:5px;",
    "background: #fadfa3; padding:5px 0;"
  );
}
