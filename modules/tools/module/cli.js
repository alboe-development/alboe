#!/usr/bin/env node
import console from "node:console";
import manifest from "./package.json" with { type: "json" };

console.log(`cli tools for ${manifest.name} are coming soon!`);
