import PortfolioClientDetail from "@/app/portfolio/[id]/[client]";

export default async function PortfolioDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const resolvedParams = await params;

  return (
    <div>
      <PortfolioClientDetail params={resolvedParams} />
    </div>
  );
}
