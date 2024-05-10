import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Item from "../Item.vue";

describe("Item.vue", () => {
  it("renders item.url", () => {
    const item = {
      url: "10",
      title: "url title",
    };
    const wrapper = mount(Item, {
      shallow: true,
      props: { item },
    });
    expect(wrapper.text()).toContain(item.url);
  });

  it("renders item.title", () => {
    const item = {
      url: "10",
      title: "url title",
    };
    const wrapper = mount(Item, {
      shallow: true,
      props: { item },
    });
    expect(wrapper.find("a").text()).toContain(item.title);
  });

  it("render an url with link to item.url and title of item.title", () => {
    const item = {
      url: "www.google.com",
      title: "google",
    };
    const wrapper = mount(Item, {
      shallow: true,
      props: { item },
    });
    const a = wrapper.find("a");
    expect(a.text()).toContain("google");
    expect(a.attributes().href === item.url).toBe(true);
  });
});
