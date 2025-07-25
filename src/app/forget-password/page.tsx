"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { apiCall } from "@/helper/apiCall";
import * as React from "react";

const ForgetPasswordPage = () => {
  const inputEmailRef = React.useRef<HTMLInputElement>(null);

  const onForgetPass = async () => {
    try {
      const res = await apiCall.post("/auth/forget-password", {
        email: inputEmailRef.current?.value,
      });

      if (res.data.success) {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen">
      <div className="w-lg m-auto">
        <Card>
          <CardHeader>Forget Password</CardHeader>
          <CardContent>
            <Input type="email" placeholder="Input email" ref={inputEmailRef} />
          </CardContent>
          <CardFooter>
            <Button type="button" onClick={onForgetPass}>
              Request Reset Password
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
