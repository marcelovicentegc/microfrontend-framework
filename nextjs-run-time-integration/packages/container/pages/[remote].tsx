import { useRouter } from "next/router";
import { LOADER_URL } from "../config/env";
import { createRemoteComponent } from "../utils/remote";

export default function RemotePage() {
  const { asPath } = useRouter();

  const RemoteComponent = createRemoteComponent();

  const url = `${LOADER_URL}/render?target=${asPath.replace("/", "")}`;

  return <RemoteComponent url={url} />;
}
