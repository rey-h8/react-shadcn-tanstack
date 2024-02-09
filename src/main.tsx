import { RouterProvider, createRouter } from "@tanstack/react-router"
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import "./themes/theme2.css"

// Import the generated route tree
import { routeTree } from "./routeTree.gen"

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router
	}
}

const root = document.getElementById("root")

if (root) {
	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>,
	)
}
