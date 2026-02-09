#!/usr/bin/env node
import { Command } from "commander";

const program = new Command();

program
  .name("devpulse")
  .description("Analyze GitHub developer activity")
  .version("1.0.0");

program
  .command("analyze <username>")
  .description("Analyze a GitHub user")
  .action((username) => {
    console.log(`Analyzing GitHub user: ${username}`);
  });

program.parse();