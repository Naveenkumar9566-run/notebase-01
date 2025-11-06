import { requireAuth } from "@/lib/auth-utils";

interface PageProps {
  params: Promise<{
    credentialId: string;
  }>
}
//http://localhost:3000/credentials/123
const page = async ({params} : PageProps) => {
  await requireAuth();
  const { credentialId } = await params;

  return (
    <p>CredentialsId: {credentialId}</p>
  )
}

export default page