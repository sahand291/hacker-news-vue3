import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import ItemList from "../ItemList.vue";
import Item from "../Item.vue";

describe("ItemList.vue", () => {
  it("should render Items for each item in window.items", () => {
    window.items = [{}, {}, {}];
    const wrapper = mount(ItemList, {
      shallow: true,
    });
    const items = wrapper.findAllComponents(Item);

    expect(items).toHaveLength(window.items.length);
    items.forEach((wrapper, i) => {
      expect(wrapper.props().item).toStrictEqual(window.items[i]);
    });
  });
});
