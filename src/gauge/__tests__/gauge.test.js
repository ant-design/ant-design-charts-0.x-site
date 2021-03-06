import React from 'react';
import { mount } from 'enzyme';
import Gauge from '../';

// TODO: Gauge-spec
describe('Gauge  plot', () => {
  const data = [];

  it('初始化以及销毁', () => {
    const config = {
      title: { visible: true, text: '仪表盘' },
      width: 400,
      height: 400,
      value: 64,
      min: 0,
      max: 100,
      range: [0, 25, 50, 75, 100],
      color: ['#39B8FF', '#52619B', '#43E089', '#C0EDF3'],
      statistic: { visible: true, text: '优', color: '#30bf78' },
    };
    const ref = React.createRef();
    mount(<Gauge {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
