import { shallowMount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'

describe('AboutView.vue', () => {
  it('renders the About page', () => {
    const wrapper = shallowMount(AboutView)
    expect(wrapper.text()).toMatch('This is the About page')
  })

  it('matches snapshot', () => {
    const wrapper = shallowMount(AboutView)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
