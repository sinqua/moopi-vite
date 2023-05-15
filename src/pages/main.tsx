import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import Layout from "../components/layout/layout";

export default function MainPage() {

    return (
        <Layout>
            <div className="h-full">
                <div className="h-full block text-3xl font-bold underline bg-pink-300">
                    Hello S2xYoon
                </div>
            </div>
        </Layout>
    );
}
