import Vue from 'vue'
import Main from '@/components/Main'

describe('Main.vue', () => {
  let Cmp, vm

  beforeEach(() => {
    Cmp = Vue.extend(Main) // Create a copy of the original component
    vm = new Cmp({
      data: { // Replace data value with this fake data
        jsonValues: ['Cat']
      }
    }).$mount() // Instances and mounts the component
  })

  it('should render correct contents', () => {
    expect(vm.$el.querySelector('.main h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })

  it('should render json of users', () => {
    expect(vm.data.jsonValues).to.equal(['Cat'])
  })
})
