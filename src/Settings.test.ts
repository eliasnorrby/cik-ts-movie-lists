import { Settings } from "./Settings";

describe("Settings", () => {
  let settings: Settings;

  it("Should get connection", () => {
    settings = new Settings("settings.local.txt");
    expect(settings.connectionString).toBe("database.txt");
  });
});
