import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

const getRandomRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const Pole = React.memo(({ rings, poleId, onDragStart, onDrop }) => {
    return (
        <div style={{ display: 'flex', position: 'relative', justifyContent: 'center' }}
            onDragOver={e => e.preventDefault()}
            onDrop={() => onDrop(poleId)}
        >
            <div style={{ height: '250px', width: '18px', background: 'darkgray', borderRadius: '10px', borderLeft: '5px solid gray', borderRight: '5px solid silver', borderTop: '5px solid silver', opacity: 0.5 }} />
            <div style={{ height: '30px', width: '300px', background: 'darkgray', borderRadius: '10px', position: 'absolute', bottom: 0, borderLeft: '5px solid gray', borderRight: '5px solid silver', borderBottom: '5px solid gray', borderTop: '5px solid silver', opacity: 0.5 }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'absolute', bottom: '30px', gap: '2px', marginBottom: '5px' }}>
                {rings.map((_, i) => <Ring ring={_} poleId={poleId} key={poleId + i} draggable={i === 0} onDragStart={onDragStart} />)}
            </div>
        </div>
    )
});

const Ring = React.memo(({ ring, draggable, onDragStart, poleId }) => {
    return (
        <span style={{ width: `${ring.size * 40}px`, height: '25px', borderRadius: '20px', backgroundColor: ring.color, cursor: `${draggable ? 'move' : 'default'}`, borderLeft: `5px solid rgba(0, 0, 0, 0.1)`, borderRight: `5px solid rgba(255, 255, 255, 0.2)`, borderBottom: `5px solid rgba(0, 0, 0, 0.2)`, borderTop: `5px solid rgba(255, 255, 255, 0.2)` }} draggable={draggable}
            onDragStart={() => onDragStart(poleId)}
        />
    )
});

export const Game = (props) => {
    const [placement, setPlacement] = useState([]);
    const sourcePole = useRef(null);

    const onDragStart = useCallback((poleId) => { sourcePole.current = poleId; }, []);

    const onDrop = useCallback((targetPole) => {
        targetPole !== sourcePole.current && setPlacement(prev => {
            const _placement = [...prev];
            const sourcePolePlacement = [..._placement[sourcePole.current]];
            const targetPolePlacement = [..._placement[targetPole]];
            targetPolePlacement.unshift(sourcePolePlacement.shift());
            _placement[sourcePole.current] = sourcePolePlacement;
            _placement[targetPole] = targetPolePlacement;
            return _placement;
        });
    }, []);

    useEffect(() => {
        const { poles, rings } = props;
        const initState = [];

        for (let i = 0; i < poles; i++)
            initState.push([]);

        for (let i = 0; i < rings; i++)
            initState[0].push({ size: i + 1, color: getRandomRgbColor() });

        setPlacement(initState);
    }, []);

    return (<>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Instructions:</span>
            <span>1. Drag and drop the rings to move them across the poles.</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', margin: 'auto', height: '100vh', alignItems: 'center', background: 'linear-gradient(to bottom left, white, lightyellow)' }}>
            {placement.map((_, i) => <Pole rings={_} poleId={i} onDragStart={onDragStart} onDrop={onDrop} key={i} />)}
        </div>
    </>
    )
}

