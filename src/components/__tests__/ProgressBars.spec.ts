import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import ProgressBar from "../ProgressBar.vue";

describe("ProgressBar.vue", () => {
  it("is hidden on initial render", () => {
    const wrapper = mount(ProgressBar, { shallow: true });
    expect(wrapper.classes()).toContain("hidden");
  });
  it("should have 0% with when initialized", () => {
    const wrapper = mount(ProgressBar, { shallow: true });
    expect(wrapper.element?.style.width).toBe("0%");
  });
});
