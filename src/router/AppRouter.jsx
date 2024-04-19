import { createBrowserRouter } from 'react-router-dom';
import { LayoutPublic } from '../layout/LayoutPublic';
import { Home } from '../projects/pages/Home';
import { About } from '../projects/pages/About';
import { NotFound } from '../projects/pages/NotFound';
import { Contact } from '../projects/pages/Contact';
import { Project } from '../projects/pages/Project';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                    },
                    {
                        path: "/sobremi",
                        element: <About />,
                    },
                    {
                        path: "/proyectos",
                        element: <Project />,
                    },
                    {
                        path: "/contacto",
                        element: <Contact />,
                    },
                ],
            },
        ],
    },
]);

