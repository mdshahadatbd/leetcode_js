function maxAncestorDiff(root: TreeNode | null): number {
  if (!root) return 0;

  const traverse = (node: TreeNode | null, min: number, max: number): number => {
    if (!node) return 0;

    const newMin = Math.min(min, node.val);
    const newMax = Math.max(max, node.val);

    const left = traverse(node.left, newMin, newMax);
    const right = traverse(node.right, newMin, newMax);

    return Math.max(newMax - newMin, left, right);
  };

  return traverse(root, root.val, root.val);
}