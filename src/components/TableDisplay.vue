<template>
  <table class="table-display">
    <thead>
      <tr>
        <th v-for="header in headers" :key="header.key">
          {{ header.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.id">
        <td v-for="header in headers" :key="header.key">
          <slot :name="header.key" :row="row">{{ row[header.key] }}</slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TableDisplay',
  props: {
    headers: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.table-display {
  width: 100%;
  border-collapse: collapse;
}
.table-display th,
.table-display td {
  color: black;
  text-align: left;
  padding: 8px;
  border: 1px solid #ddd;
}
.table-display th {
  background-color: #f4f4f4;
}

.text-green {
  color: green;
}

.text-red {
  color: red;
}
</style>
