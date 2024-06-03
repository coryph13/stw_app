import { useTranslations } from "next-intl";

type Props = {
    children?: React.ReactNode,
    title?: React.ReactNode
}

export default function PageLayout({children, title}: Props) {
    const t = useTranslations('PageLayout');

    return (
        <div>

        </div>
    )
}