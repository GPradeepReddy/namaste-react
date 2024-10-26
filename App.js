

const parent = React.createElement('div', { id: 'parent' },
    [
        React.createElement('div', { id: 'child1' }, [
            React.createElement('h1', { id: 'child1' }, 'Child One'),
            React.createElement('h2', { id: 'child2' }, 'Child Two'),
            React.createElement('h3', { id: 'child3' }, 'Child Three')
        ]),
        React.createElement('div', { id: 'child2' }, [
            React.createElement('h1', { id: 'child1' }, 'Child One'),
            React.createElement('h2', { id: 'child2' }, 'Child Two'),
            React.createElement('h3', { id: 'child3' }, 'Child Three')
        ])
    ]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);