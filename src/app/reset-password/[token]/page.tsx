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
import { useParams } from "next/navigation";
import * as React from "react";

const ResetPasswordPage = () => {
  const params = useParams();
  const inputPasswordRef = React.useRef<HTMLInputElement>(null);
  const inputConfirmPasswordRef = React.useRef<HTMLInputElement>(null);

  const onResetPass = async () => {
    try {
      if (
        inputPasswordRef.current?.value ===
        inputConfirmPasswordRef.current?.value
      ) {
        const res = await apiCall.patch(
          "/auth/reset-password",
          {
            password: inputPasswordRef.current?.value,
          },
          { headers: { Authorization: `Bearer ${params.token}` } }
        );

        if (res.data.success) {
          alert(res.data.message);
        }
      } else {
        alert("Password tidak cocok");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen">
      <div className="w-lg m-auto">
        <Card>
          <CardHeader>New Password</CardHeader>
          <CardContent>
            <Input
              type="password"
              placeholder="New password"
              ref={inputPasswordRef}
            />
            <Input
              type="password"
              placeholder="Confirm password"
              ref={inputConfirmPasswordRef}
            />
          </CardContent>
          <CardFooter>
            <Button type="button" onClick={onResetPass}>
              Request Reset Password
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
