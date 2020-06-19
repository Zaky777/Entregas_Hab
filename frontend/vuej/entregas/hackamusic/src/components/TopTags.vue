<template>
  <div>
    <table class="purpleHorizon">
      <tr v-for="tag in tags" :key="tag.id">{{ tag.name }}</tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "TopTags",
  props: {
    tags: Array
  },
  data() {
    return {
      tags: []
    };
  }
};
</script>

<style scoped>
table.purpleHorizon {
  border: 4px solid #e20707;
  background-color: #69e9d3;
  width: 100%;
  text-align: center;
}
table.purpleHorizon td,
table.purpleHorizon th {
  border: 1px solid #f0efef;
  padding: 5px 2px;
}
table.purpleHorizon tbody td {
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
}
table.purpleHorizon tr:nth-child(even) {
  background: #cc3bfc;
}
table.purpleHorizon thead {
  background: #792396;
  border-bottom: 4px solid #792396;
}
table.purpleHorizon thead th {
  font-size: 19px;
  font-weight: bold;
  color: #ffffff;
  text-align: left;
  border-left: 7px solid #792396;
}
table.purpleHorizon thead th:first-child {
  border-left: none;
}

table.purpleHorizon tfoot {
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
  background: #ce3cff;
  background: -moz-linear-gradient(top, #da6dff 0%, #d34fff 66%, #ce3cff 100%);
  background: -webkit-linear-gradient(
    top,
    #da6dff 0%,
    #d34fff 66%,
    #ce3cff 100%
  );
  background: linear-gradient(to bottom, #da6dff 0%, #d34fff 66%, #ce3cff 100%);
  border-top: 5px solid #792396;
}
table.purpleHorizon tfoot td {
  font-size: 13px;
}
table.purpleHorizon tfoot .links {
  text-align: right;
}
table.purpleHorizon tfoot .links a {
  display: inline-block;
  background: #792396;
  color: #ffffff;
  padding: 2px 8px;
  border-radius: 5px;
}
</style>