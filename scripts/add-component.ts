import fs from "fs";
import { ncp } from "ncp";
const PREFIX = "Ao";
(function () {
  try {
    const args = process.argv;
    const newComponentName = args.pop();

    if (!newComponentName) {
      console.error("Please provide component name");
      return;
    }

    console.log(`Creating component ${newComponentName}`);

    const newComponentNameLower = newComponentName.toLowerCase();

    const newComponentNameCapitalized =
      newComponentName.substring(0, 1).toUpperCase() +
      newComponentName.substring(1);

    const className = `${PREFIX}${newComponentNameCapitalized}`;
    const elementName = `${PREFIX.toLowerCase()}-${newComponentName.toLowerCase()}`;

    const COMPONENTS_DIR = "./src/components";
    const TEMPLATE_DIR = `${COMPONENTS_DIR}/.template`;

    const targetDir = `${COMPONENTS_DIR}/${newComponentName}`;

    function createFiles() {
      ncp(TEMPLATE_DIR, targetDir, (err) => {
        if (err) {
          throw new Error(err);
        }

        fs.readdir(targetDir, (err, files) => {
          files.forEach((file) => {
            let fileContent = fs.readFileSync(`${targetDir}/${file}`, "utf8");
            fileContent = fileContent.replace(
              /Template/g,
              newComponentNameCapitalized
            );
            fileContent = fileContent.replace(
              /template/g,
              newComponentNameLower
            );
            fileContent = fileContent.replace(/element-name/g, elementName);
            fileContent = fileContent.replace(/ClassName/g, className);

            const newFileName = file.replace(
              /template/g,
              newComponentNameLower
            );
            fs.writeFileSync(
              `${targetDir}/${newFileName}`,
              fileContent,
              "utf8"
            );
            if (file.includes("template")) {
              fs.rmSync(`${targetDir}/${file}`);
            }
          });
        });
      });
    }

    createFiles();

    console.log("Component created successfully.");
  } catch (error) {
    console.error(">>> ERROR:", error.message);
    process.exit(0);
  }
})();
