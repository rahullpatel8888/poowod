function PlayerModel({ nodes, materials, scale, position, rotation, group }) {
	console.log("PlayerModel nodes:", nodes);
	return (
		<group
			dispose={null}
			scale={scale}
			position={position}
			ref={group}
			rotation={[0, 0, 0]}
		>
			<primitive object={nodes.Armature} />
		</group>
	);
}

export default PlayerModel;
