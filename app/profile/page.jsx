"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Profile from "@components/Profile";

const MyProfile = () => {
  const handleEdit = () => {};
  const handleDelete = async () => {};
  return (
    <Profile
      name="my"
      desc="welcome to your personalised profile"
      post={[]}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  );
};

export default MyProfile;
