import React, { Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import { Loader } from '../ui/components/Loader';

export const AppRouter = () => {

    const HomeView = lazy(() => import('../pages/Home/HomePage'));
    const PDPView = lazy(() => import('../pages/PDP/PDPPage'));
    const PLPView = lazy(() => import('../pages/PLP/PLPPage'));


    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/items/:id" element={<PDPView />} />
                <Route path="/items" element={<PLPView />} />
            </Routes>
        </Suspense>
    )
}