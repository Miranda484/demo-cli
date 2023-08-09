const findCycles = (graph) => {
    const visited = new Set();  // 已访问的节点集合
    const cycles = [];  // 存储环的路径
  
    for (const node in graph) {
      if (!visited.has(node)) {
        dfs(node, [node], visited, cycles, graph);  // 传递图数据
      }
    }
  
    return cycles;
  }
  const dfs = (currentNode, path, visited, cycles, graph) => {  // 添加 graph 参数
    visited.add(currentNode);
  
    const neighbors = graph[currentNode] || [];  // 处理节点没有邻居的情况
  
    for (const neighbor of neighbors) {
      if (path.includes(neighbor)) {
        const cycle = path.slice(path.indexOf(neighbor));
        cycles.push(cycle);
      } else if (!visited.has(neighbor)) {
        dfs(neighbor, [...path, neighbor], visited, cycles, graph);  // 传递 graph 参数
      }
    }
  
    visited.delete(currentNode);
  }
      
const hasCycle = (graph) => {
   return findCycles(graph) 
}
module.exports = {
    hasCycle
}