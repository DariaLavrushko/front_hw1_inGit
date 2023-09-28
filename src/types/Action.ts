type Action = 
| {type: 'sandwich/hleb', payload: string}
| {type: 'sandwich/sir', payload: string}
| {type: 'sandwich/kolbasa', payload: string};

export default Action;