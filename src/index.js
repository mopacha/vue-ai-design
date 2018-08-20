import AiHighcharts from './packages/highcharts/index.js'

const components = [
  AiHighcharts
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持标签引入*/
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default  {
  version: '1.0.9',
  install,
  AiHighcharts
}

export { AiHighcharts }
