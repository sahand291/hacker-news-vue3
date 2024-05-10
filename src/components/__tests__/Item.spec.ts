import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Item from "../Item.vue";

describe("Item.vue", () => {
  it("renders item.url", () => {
    const item = {
      url: 10,
    };
    const wrapper = mount(Item, {
      shallow: true,
      props: { item },
    });
    expect(wrapper.text()).toContain(item.url);
  });
});
