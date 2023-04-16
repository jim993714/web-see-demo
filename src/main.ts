import { createApp } from "vue";
import "./style.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router/index";
import * as Sentry from "@sentry/vue";
const app = createApp(App);

Sentry.init({
  app,
  dsn: "https://2b40f625e28f431a9bc50d5395059c0c@o4504000062423040.ingest.sentry.io/4505023040585728",
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracePropagationTargets: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  tracesSampleRate: 1.0,
});

app.config.errorHandler = (err, vm: any, info) => {
  Sentry.captureException(err, {
    extra: {
      componentName: vm.$options.name,
      propsData: vm.$options.propsData,
      info,
    },
  });
};

app.use(ElementPlus);
app.use(router);
app.mount("#app");
