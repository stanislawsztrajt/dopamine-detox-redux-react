import React, { FC, useEffect } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import aos from "aos";
import "aos/dist/aos.css";
import client from "src/api/gql-client";

import Home from "src/pages";
import Dashboard from "src/pages/dashboard";
import Settings from "src/pages/settings";
import { DashboardLayout, AuthLayout } from "src/features/ui";
import { Login, SignUp } from "src/pages/authorization";
import StartDopamineManagement from "src/pages/start-dopamine-management";

Notification.requestPermission();

const App: FC = () => {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="dashboard">
            <Route
              index
              element={
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              }
            />

            <Route
              path="settings"
              element={
                <DashboardLayout>
                  <Settings />
                </DashboardLayout>
              }
            />

            <Route
              path="start-dopamine-management"
              element={
                <DashboardLayout>
                  <StartDopamineManagement />
                </DashboardLayout>
              }
            />
          </Route>

          <Route
            path="login"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />
          <Route
            path="sign-up"
            element={
              <AuthLayout>
                <SignUp />
              </AuthLayout>
            }
          />

          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Route>
      </Routes>
    </ApolloProvider>
  );
};

export default App;
