import Gallery from "@/components/Gallery"

type Props = {
    params: {
        terms: string
    }
}

export function generateMetadata({ params: { terms } }: Props) {

    

    return {
        title: `Results for ${terms} `
    }
}

export default function SearchResults({ params: {terms } }: Props) {

    

    return <Gallery topic={terms} />
}