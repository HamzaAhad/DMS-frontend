import { lazy } from "react";

const PagesRoutes = [
  //Workspace

  {
    path: "/pages/workspace",
    component: lazy(() => import("../../view/main/widgets/charts")),
    layout: "VerticalLayout",
    isProtected: true,
  },
  {
    path: "/pages/analytics",
    component: lazy(() => import("../../view/pages/dashboard")),
    layout: "VerticalLayout",
    isProtected: true,
  },
  // {
  //   path: "/pages/workspace-history",
  //   component: lazy(() => import("../../view/pages/workspaceHistory/WorkspaceHistory")),
  //   layout: "VerticalLayout",
  //   isProtected: true,
  // },

  {
    path: "/pages/projects",
    component: lazy(() => import("../../view/pages/projects")),
    layout: "VerticalLayout",
    isProtected: true,
  },
  {
    path: "/pages/users",
    component: lazy(() => import("../../view/pages/users")),
    layout: "VerticalLayout",
    isProtected: true,
  },
  {
    path: "/pages/documents",
    component: lazy(() => import("../../view/pages/documents")),
    layout: "VerticalLayout",
    isProtected: true,
  },
  {
    path: "/pages/departments",
    component: lazy(() => import("../../view/pages/departments")),
    layout: "VerticalLayout",
    isProtected: true,
  },
  {
    path: "/pages/mdr",
    component: lazy(() => import("../../view/pages/mdr")),
    layout: "VerticalLayout",
    isProtected: true,
  },

  // PAGES
  {
    path: "/pages/authentication/login",
    component: lazy(() => import("../../view/pages/authentication/login")),
    layout: "FullLayout",
    isProtected: false,
  },
  {
    path: "/pages/authentication/recover-password",
    component: lazy(() =>
      import("../../view/pages/authentication/recover-password")
    ),
    layout: "FullLayout",
    isProtected: false,
  },
  {
    path: "/pages/authentication/verify-email",
    component: lazy(() =>
      import("../../view/pages/authentication/verify-email")
    ),
    layout: "FullLayout",
    isProtected: false,
  },
  {
    path: "/pages/authentication/register",
    component: lazy(() => import("../../view/pages/authentication/register")),
    layout: "FullLayout",
    isProtected: false,
  },
  {
    path: "/pages/authentication/reset-password",
    component: lazy(() =>
      import("../../view/pages/authentication/reset-password")
    ),
    layout: "FullLayout",
    isProtected: false,
  },
  {
    path: "/pages/pricing",
    component: lazy(() => import("../../view/pages/pricing")),
    layout: "VerticalLayout",
    isProtected: true,
  },
  {
    path: "/pages/profile/personel-information",
    component: lazy(() => import("../../view/pages/profile")),
    layout: "VerticalLayout",
    isProtected: true,
  },
  {
    path: "/pages/profile/password-change",
    component: lazy(() => import("../../view/pages/profile")),
    layout: "VerticalLayout",
    isProtected: true,
  },
  {
    path: "/pages/payment/success",
    component: lazy(() => import("../../view/pages/payment-success")),
    layout: "FullLayout",
    isProtected: true,
  },
  {
    path: "/pages/payment/fail",
    component: lazy(() => import("../../view/pages/payment-fail")),
    layout: "FullLayout",
    isProtected: true,
  },
  {
    path: "/pages/dashboard",
    component: lazy(() => import("../../view/pages/landing")),
    layout: "FullLayout",
    isProtected: true,
  },
];

export default PagesRoutes;
