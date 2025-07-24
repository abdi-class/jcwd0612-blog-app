"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { apiCall } from "@/helper/apiCall";
import { useParams, useRouter } from "next/navigation";

const VerifyPage = () => {
  const params = useParams();
  const router = useRouter();
  const onVerify = async () => {
    try {
      const verify = await apiCall.get("/auth/verify", {
        headers: {
          Authorization: `Bearer ${params.token}`,
        },
      });

      alert("Verifikasi Berhasil");
      router.replace("/sign-in"); // redirect to sign in page
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="text-center py-52">
      <h3>Click button below to verify your account</h3>
      <Button type="button" onClick={onVerify}>
        Verify Account
      </Button>
    </div>
  );
};

export default VerifyPage;
