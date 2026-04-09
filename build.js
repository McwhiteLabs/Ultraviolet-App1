import { cpSync, mkdirSync, rmSync } from "node:fs";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist", { recursive: true });

cpSync("public", "dist", { recursive: true });
cpSync(uvPath, "dist/uv", { recursive: true });
cpSync(epoxyPath, "dist/epoxy", { recursive: true });
cpSync(baremuxPath, "dist/baremux", { recursive: true });

console.log("Build complete — dist/ folder ready for static hosting.");
