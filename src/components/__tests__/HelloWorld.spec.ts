import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
  it("there is HelloWorld cmp", async () => {
    const wrapper = mount(HelloWorld, {
      shallow: true,
      props: { msg: "dsds" },
    });
    expect(wrapper.text()).toContain("dsds");
  });
});
