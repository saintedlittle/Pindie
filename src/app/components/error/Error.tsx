import Error from 'next/error';
import { GetServerSideProps } from 'next';
import React from "react";
import Container from "@/app/components/ui/div/Container";

interface PageProps {
    errorCode: number | false;
    stars: number;
}

const Page: React.FC<PageProps> = ({ errorCode, stars }) => {
    if (errorCode) {
        return <Error statusCode={errorCode} />;
    }

    return <Container>Next stars: {stars}</Container>;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const errorCode = res.ok ? false : res.status;
    const json = await res.json();

    return {
        props: { errorCode, stars: json.stargazers_count },
    };
};

export default Page;
