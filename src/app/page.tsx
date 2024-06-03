import { redirect } from "next/dist/server/api-utils";

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
    redirect('/ru');
}