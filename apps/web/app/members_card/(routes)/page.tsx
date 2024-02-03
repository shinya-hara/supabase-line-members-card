"use client";

import { useEffect, useState } from "react";
import { useLiff } from "~/providers/LiffProvider";
import { Profile } from "@liff/get-profile";

export const Page = () => {
  const { liff } = useLiff();

  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    if (!liff) return;

    if (!liff.isLoggedIn()) {
      liff.login();
      return;
    }

    liff.getProfile().then((profile) => {
      setProfile(profile);
    });
  }, [liff]);

  return (
    <div>
      <h1>会員証</h1>
      <p>会員証を表示します</p>

      <pre>{JSON.stringify(profile, null, 4)}</pre>
    </div>
  );
};

export default Page;
