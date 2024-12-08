import fs from "fs";
import path from "path";

export function processSFCs() {
  const inputDir = "./components/Btn"; // Path to your Vue components
  const outputFile = "./public/sfc-content.js"; // Output file path

  const sfcFiles = fs
    .readdirSync(inputDir)
    .filter((file) => file.endsWith(".vue"));

  const sfcContent = sfcFiles.map((file) => {
    const filePath = path.join(inputDir, file);
    const content = fs.readFileSync(filePath, "utf8");
    return { fileName: file, content };
  });

  const outputData = `const sfcContent = ${JSON.stringify(sfcContent, null, 2)};
export default sfcContent;`;

  fs.writeFileSync(outputFile, outputData);
  console.log(`Processed ${sfcFiles.length} SFC(s) into ${outputFile}`);
}
