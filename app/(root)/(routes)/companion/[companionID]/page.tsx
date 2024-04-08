import prismadb from "@/lib/prismadb";

interface CompanionIdPageProps {
    params: {
        companionId: string;
    };
};

const CompanionIdPage = async ({
    params
}: CompanionIdPageProps) => {

    const companion = await prismadb.companion
    

    return (
        <div>
            Hello Companion Page
        </div>
    );
}

export default CompanionIdPage;