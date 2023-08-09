// const convertToGrapth = (data) => {
//     const graph = {
//         nodes: [],
//         edges:[]
//     }

//     const processNode = (node,parent) => {
//         // const nodeId = `${node.name}@${node.version}`
//         if(typeof node === 'string') return 
//         const nodeId = node.name
//         graph.nodes.push({id: nodeId, label: nodeId})

//         if(parent) {
//             const edge = {source: parent, target: nodeId}
//             graph.edges.push(edge)
//         }

//         if(node.children.length > 0 && typeof node.children[0] === 'object'){
//             node.children.forEach(child => {processNode(child, nodeId)})
//         }
//     }

//     processNode(data, null)
//     return graph
// }
const convertToGrapth = (data) => {
    const graph = {}
    function dfs(node) {
        if (!graph[node.name]) {
          graph[node.name] = [];
        }
    
        for (const child of node.children) {
          graph[node.name].push(child.name);
          dfs(child);
        }
      }
      dfs(data);
      return graph
}

module.exports = {
    convertToGrapth
}