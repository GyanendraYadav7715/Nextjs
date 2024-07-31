 
import UserTable from "./UserTable";
import Link from "next/link";
import React, { Suspense, lazy } from "react";
interface Props{
  searchParams:{sortOrder:string}
}

const UserPage = ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder);
  return (
    <>
      <h1>Users</h1>
      <Link href="users/new" className="btn btn-primary">
        NEW LINK
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UserPage;
