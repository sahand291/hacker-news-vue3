import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Item from "../Item.vue";

describe("Item.vue", () => {
  it("renders item.title .score and .author", () => {
    const item = {
      url: "10",
      title: "url title",
      score: "5",
      author: "mousa",
    };
    const wrapper = mount(Item, {
      shallow: true,
      props: { item },
    });
    expect(wrapper.text()).toContain(item.title);
    expect(wrapper.text()).toContain(item.score);
    expect(wrapper.text()).toContain(item.author);
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
    expect(a.attributes().href).toBe("www.google.com");
  });
});
